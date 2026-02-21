# EmojiPeople


```text
material/Social/EmojiPeople
```

```text
include('material/Social/EmojiPeople')
```



| Illustration | EmojiPeople |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/EmojiPeople.png) | ![illustration for EmojiPeople](../../material/Social/EmojiPeople.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmojiPeopleXs>`
- `<$EmojiPeopleSm>`
- `<$EmojiPeopleMd>`
- `<$EmojiPeopleLg>`





## EmojiPeople

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EmojiPeople
include('material/Social/EmojiPeople')

' renders the element
EmojiPeople('EmojiPeople', 'Emoji People', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element EmojiPeople
include('material/Social/EmojiPeople')

' renders the element
EmojiPeople('EmojiPeople', 'Emoji People', 'an optional tech label', 'an optional description')
@enduml
```

