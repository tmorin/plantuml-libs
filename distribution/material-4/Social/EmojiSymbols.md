# EmojiSymbols


```text
material-4/Social/EmojiSymbols
```

```text
include('material-4/Social/EmojiSymbols')
```



| Illustration | EmojiSymbols |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/EmojiSymbols.png) | ![illustration for EmojiSymbols](../../material-4/Social/EmojiSymbols.Local.png) |




## EmojiSymbols

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EmojiSymbols
include('material-4/Social/EmojiSymbols')

' renders the element
EmojiSymbols('EmojiSymbols', 'Emoji Symbols', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EmojiSymbols
include('material-4/Social/EmojiSymbols')

' renders the element
EmojiSymbols('EmojiSymbols', 'Emoji Symbols', 'an optional tech label', 'an optional description')
@enduml
```

