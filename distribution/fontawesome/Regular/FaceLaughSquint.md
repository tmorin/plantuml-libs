# FaceLaughSquint


```text
fontawesome/Regular/FaceLaughSquint
```

```text
include('fontawesome/Regular/FaceLaughSquint')
```



| Illustration | FaceLaughSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceLaughSquint.png) | ![illustration for FaceLaughSquint](../../fontawesome/Regular/FaceLaughSquint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceLaughSquintXs>`
- `<$FaceLaughSquintSm>`
- `<$FaceLaughSquintMd>`
- `<$FaceLaughSquintLg>`





## FaceLaughSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceLaughSquint
include('fontawesome/Regular/FaceLaughSquint')

' renders the element
FaceLaughSquint('FaceLaughSquint', 'Face Laugh Squint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceLaughSquint
include('fontawesome/Regular/FaceLaughSquint')

' renders the element
FaceLaughSquint('FaceLaughSquint', 'Face Laugh Squint', 'an optional tech label', 'an optional description')
@enduml
```

