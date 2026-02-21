# ThumbsUp


```text
fontawesome/Solid/ThumbsUp
```

```text
include('fontawesome/Solid/ThumbsUp')
```



| Illustration | ThumbsUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThumbsUp.png) | ![illustration for ThumbsUp](../../fontawesome/Solid/ThumbsUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbsUpXs>`
- `<$ThumbsUpSm>`
- `<$ThumbsUpMd>`
- `<$ThumbsUpLg>`





## ThumbsUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThumbsUp
include('fontawesome/Solid/ThumbsUp')

' renders the element
ThumbsUp('ThumbsUp', 'Thumbs Up', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThumbsUp
include('fontawesome/Solid/ThumbsUp')

' renders the element
ThumbsUp('ThumbsUp', 'Thumbs Up', 'an optional tech label', 'an optional description')
@enduml
```

