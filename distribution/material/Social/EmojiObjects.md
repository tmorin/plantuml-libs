# EmojiObjects


```text
material/Social/EmojiObjects
```

```text
include('material/Social/EmojiObjects')
```



| Illustration | EmojiObjects |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/EmojiObjects.png) | ![illustration for EmojiObjects](../../material/Social/EmojiObjects.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmojiObjectsXs>`
- `<$EmojiObjectsSm>`
- `<$EmojiObjectsMd>`
- `<$EmojiObjectsLg>`





## EmojiObjects

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EmojiObjects
include('material/Social/EmojiObjects')

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
include('material/bootstrap')

' loads the Item which embeds the element EmojiObjects
include('material/Social/EmojiObjects')

' renders the element
EmojiObjects('EmojiObjects', 'Emoji Objects', 'an optional tech label', 'an optional description')
@enduml
```

