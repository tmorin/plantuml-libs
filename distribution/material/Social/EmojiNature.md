# EmojiNature


```text
material/Social/EmojiNature
```

```text
include('material/Social/EmojiNature')
```



| Illustration | EmojiNature |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/EmojiNature.png) | ![illustration for EmojiNature](../../material/Social/EmojiNature.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmojiNatureXs>`
- `<$EmojiNatureSm>`
- `<$EmojiNatureMd>`
- `<$EmojiNatureLg>`





## EmojiNature

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EmojiNature
include('material/Social/EmojiNature')

' renders the element
EmojiNature('EmojiNature', 'Emoji Nature', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EmojiNature
include('material/Social/EmojiNature')

' renders the element
EmojiNature('EmojiNature', 'Emoji Nature', 'an optional tech label', 'an optional description')
@enduml
```

