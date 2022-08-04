# EmojiEmotions


```text
material-4/Social/EmojiEmotions
```

```text
include('material-4/Social/EmojiEmotions')
```



| Illustration | EmojiEmotions |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/EmojiEmotions.png) | ![illustration for EmojiEmotions](../../material-4/Social/EmojiEmotions.Local.png) |




## EmojiEmotions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EmojiEmotions
include('material-4/Social/EmojiEmotions')

' renders the element
EmojiEmotions('EmojiEmotions', 'Emoji Emotions', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EmojiEmotions
include('material-4/Social/EmojiEmotions')

' renders the element
EmojiEmotions('EmojiEmotions', 'Emoji Emotions', 'an optional tech label', 'an optional description')
@enduml
```

