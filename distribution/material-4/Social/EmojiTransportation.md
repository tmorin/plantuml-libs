# EmojiTransportation


```text
material-4/Social/EmojiTransportation
```

```text
include('material-4/Social/EmojiTransportation')
```



| Illustration | EmojiTransportation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/EmojiTransportation.png) | ![illustration for EmojiTransportation](../../material-4/Social/EmojiTransportation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmojiTransportationXs>`
- `<$EmojiTransportationSm>`
- `<$EmojiTransportationMd>`
- `<$EmojiTransportationLg>`





## EmojiTransportation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EmojiTransportation
include('material-4/Social/EmojiTransportation')

' renders the element
EmojiTransportation('EmojiTransportation', 'Emoji Transportation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EmojiTransportation
include('material-4/Social/EmojiTransportation')

' renders the element
EmojiTransportation('EmojiTransportation', 'Emoji Transportation', 'an optional tech label', 'an optional description')
@enduml
```

