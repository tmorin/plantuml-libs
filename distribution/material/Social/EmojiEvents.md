# EmojiEvents


```text
material/Social/EmojiEvents
```

```text
include('material/Social/EmojiEvents')
```



| Illustration | EmojiEvents |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/EmojiEvents.png) | ![illustration for EmojiEvents](../../material/Social/EmojiEvents.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmojiEventsXs>`
- `<$EmojiEventsSm>`
- `<$EmojiEventsMd>`
- `<$EmojiEventsLg>`





## EmojiEvents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EmojiEvents
include('material/Social/EmojiEvents')

' renders the element
EmojiEvents('EmojiEvents', 'Emoji Events', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EmojiEvents
include('material/Social/EmojiEvents')

' renders the element
EmojiEvents('EmojiEvents', 'Emoji Events', 'an optional tech label', 'an optional description')
@enduml
```

