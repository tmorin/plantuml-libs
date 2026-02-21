# EmojiEmotions


```text
material/Social/EmojiEmotions
```

```text
include('material/Social/EmojiEmotions')
```



| Illustration | EmojiEmotions |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/EmojiEmotions.png) | ![illustration for EmojiEmotions](../../material/Social/EmojiEmotions.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmojiEmotionsXs>`
- `<$EmojiEmotionsSm>`
- `<$EmojiEmotionsMd>`
- `<$EmojiEmotionsLg>`





## EmojiEmotions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EmojiEmotions
include('material/Social/EmojiEmotions')

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
include('material/bootstrap')

' loads the Item which embeds the element EmojiEmotions
include('material/Social/EmojiEmotions')

' renders the element
EmojiEmotions('EmojiEmotions', 'Emoji Emotions', 'an optional tech label', 'an optional description')
@enduml
```

