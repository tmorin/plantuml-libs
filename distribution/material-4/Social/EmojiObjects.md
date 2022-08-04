# EmojiObjects


```text
material-4/Social/EmojiObjects
```

```text
include('material-4/Social/EmojiObjects')
```



| Illustration | EmojiObjects |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/EmojiObjects.png) | ![illustration for EmojiObjects](../../material-4/Social/EmojiObjects.Local.png) |




## EmojiObjects

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EmojiObjects
include('material-4/Social/EmojiObjects')

' renders the element
EmojiObjects('EmojiObjects', 'Emoji Objects', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EmojiObjects
include('material-4/Social/EmojiObjects')

' renders the element
EmojiObjects('EmojiObjects', 'Emoji Objects', 'an optional tech label', 'an optional description')
@enduml
```

