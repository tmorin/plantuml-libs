# FaceSadCry


```text
fontawesome/Regular/FaceSadCry
```

```text
include('fontawesome/Regular/FaceSadCry')
```



| Illustration | FaceSadCry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceSadCry.png) | ![illustration for FaceSadCry](../../fontawesome/Regular/FaceSadCry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceSadCryXs>`
- `<$FaceSadCrySm>`
- `<$FaceSadCryMd>`
- `<$FaceSadCryLg>`





## FaceSadCry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceSadCry
include('fontawesome/Regular/FaceSadCry')

' renders the element
FaceSadCry('FaceSadCry', 'Face Sad Cry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceSadCry
include('fontawesome/Regular/FaceSadCry')

' renders the element
FaceSadCry('FaceSadCry', 'Face Sad Cry', 'an optional tech label', 'an optional description')
@enduml
```

