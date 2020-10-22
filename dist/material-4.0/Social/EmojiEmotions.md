# Emoji Emotions

```text
material-4.0/Social/EmojiEmotions
```

```text
include('material-4.0/Social/EmojiEmotions')
```

|icon|element|
|---|---|
|![](EmojiEmotions.png)|![](EmojiEmotions.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the EmojiEmotions element
include('material-4.0/Social/EmojiEmotions')
EmojiEmotions('emoji_emotions', 'Emoji Emotions', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the EmojiEmotions element
include('material-4.0/Social/EmojiEmotions')
EmojiEmotions('emoji_emotions', 'Emoji Emotions', 'an optional tech field')
@enduml
```

