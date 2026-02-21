# AnchorCircleXmark


```text
fontawesome/Solid/AnchorCircleXmark
```

```text
include('fontawesome/Solid/AnchorCircleXmark')
```



| Illustration | AnchorCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AnchorCircleXmark.png) | ![illustration for AnchorCircleXmark](../../fontawesome/Solid/AnchorCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnchorCircleXmarkXs>`
- `<$AnchorCircleXmarkSm>`
- `<$AnchorCircleXmarkMd>`
- `<$AnchorCircleXmarkLg>`





## AnchorCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AnchorCircleXmark
include('fontawesome/Solid/AnchorCircleXmark')

' renders the element
AnchorCircleXmark('AnchorCircleXmark', 'Anchor Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AnchorCircleXmark
include('fontawesome/Solid/AnchorCircleXmark')

' renders the element
AnchorCircleXmark('AnchorCircleXmark', 'Anchor Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

