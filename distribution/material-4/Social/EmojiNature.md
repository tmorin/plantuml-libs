# EmojiNature


```text
material-4/Social/EmojiNature
```

```text
include('material-4/Social/EmojiNature')
```



| Illustration | EmojiNature |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/EmojiNature.png) | ![illustration for EmojiNature](../../material-4/Social/EmojiNature.Local.png) |




## EmojiNature

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EmojiNature
include('material-4/Social/EmojiNature')

' renders the element
EmojiNature('EmojiNature', 'Emoji Nature', 'an optional tech label')
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

' loads the Item which embeds the element EmojiNature
include('material-4/Social/EmojiNature')

' renders the element
EmojiNature('EmojiNature', 'Emoji Nature', 'an optional tech label')
@enduml
```

