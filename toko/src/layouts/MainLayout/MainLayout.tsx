import { Outlet, useMatch, useNavigate } from "react-router-dom";
import HeaderMenu from "../../components/organisms/HeaderMenu";
import FooterMenu from "../../components/organisms/FooterMenu";
import ChatInputForm from "../../components/organisms/ChatInputForm";
import { useState } from "react";
import { PATH_CONTACT, PATH_CONTACTS, PATH_CONVERSATION, PATH_CONVERSATIONS, PATH_NEW_CONTACT, PATH_NEW_CONVERSATION, PATH_SETTINGS } from "../../routes/allPaths";

const useAuthState = () => ({ isAuth: true });

const MainLayout = ({
  
}) => {
  const navigate = useNavigate();
  
  const { isAuth } = useAuthState();
  const [draft, setDraft] = useState("");

  let headerLabel = "Conversations";
  
  let hrefIconGauche: string = PATH_CONVERSATIONS;
  let imageSrcGauche: string = "./fleche-gauche.svg";

  let hrefIconDroite: string = PATH_NEW_CONTACT; 
  let imageSrcDroite: string = "./user-add.svg";

    // --- Routes---
  const Conversations = useMatch(PATH_CONVERSATIONS);
  const Conversation = useMatch(PATH_CONVERSATION);
  const NewConversation = useMatch(PATH_NEW_CONVERSATION);
  const Contacts = useMatch(PATH_CONTACTS);
  const ContactDetail = useMatch(PATH_CONTACT);
  const NewContact = useMatch(PATH_NEW_CONTACT)
  const Settings = useMatch(PATH_SETTINGS);

  const isConversation = !!Conversation;
  const isNewConversation = !!NewConversation;

  // Condition pour afficher le noms de la page + icons et href
  if (Conversations){ 
    headerLabel = "Conversations";
    hrefIconGauche = PATH_NEW_CONVERSATION
    imageSrcGauche = "./new.svg";
  }

  if (Conversation){ 
    headerLabel = `Conversation ${Conversation.params.conversationId}`;
    hrefIconDroite = PATH_CONTACT
    imageSrcDroite = "./user.svg";
  }

  if (Contacts) headerLabel = "Contacts";

  if (ContactDetail) headerLabel = `${ContactDetail.params.contactId}`;
  
  if (Settings) headerLabel = "Paramètres";


  const handleSend = (message: string) => {
    // TODO: envoie le message (API / websocket)
    console.log("SEND:", message);
    setDraft("");
  };



  // Si public ou pas connecté => pas de menus
  if (!isAuth) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="container mx-auto flex-1 py-6">
          <Outlet />
        </main>
      </div>
    );
  }
  return (    
		 <div className="min-h-screen flex flex-col">
      <HeaderMenu
        headerLabel={headerLabel}
        headerLabelLevel={1}
        imageSrcDroite={imageSrcDroite}
        hrefIconDroite={hrefIconDroite}
        imageSrcGauche={imageSrcGauche}
        hrefIconGauche={hrefIconGauche}
        width="24"
        height="24"
        headerClassName="h-[20vh]" // 20% du viewport
        textClassName="text-center text-xl font-semibold"
        linkClassName="p-2 rounded focus:outline-none focus:ring"
        imageClassName="w-6 h-6"
      />

      {/* Corps de page */}
      <main className="container mx-auto flex-1 overflow-auto py-6">
        <Outlet />
      </main>

      {/* ⬇️ Conditionnel: soit FooterMenu, soit ChatInputForm */}
      {isConversation || isNewConversation ? (
        <ChatInputForm
          formClassName="border-t bg-black/5"
          textareaName="message"
          textareaValue={draft}
          onTextareaChange={setDraft}
          onSubmit={handleSend}
          rows={3}
          buttonClassName="bg-primary text-white"
        />
    ) : (
        <FooterMenu
          width="24"
          height="24"
          footerClassName="h-[12vh]"
          linkClassName="p-2 rounded focus:outline-none focus:ring"
          imageClassName="w-6 h-6"
          btnDisconnect="Déconnexion"
          imageBtnDisconnect="/deconnexion.svg"
          onClick={() => {
            // logout(); 
            navigate("/login");
          }}
        />
      )}
    </div>
  );
};

export default MainLayout;