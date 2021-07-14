# EmojiPeople


```text
material-4/Social/EmojiPeople
```

```text
include('material-4/Social/EmojiPeople')
```



| Illustration | EmojiPeople |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/EmojiPeople.png) | ![illustration for EmojiPeople](../../material-4/Social/EmojiPeople.Local.png) |




## EmojiPeople

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EmojiPeople
include('material-4/Social/EmojiPeople')

' renders the element
EmojiPeople('EmojiPeople', 'Emoji People', 'an optional tech label')
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

' loads the Item which embeds the element EmojiPeople
include('material-4/Social/EmojiPeople')

' renders the element
EmojiPeople('EmojiPeople', 'Emoji People', 'an optional tech label')
@enduml
```

