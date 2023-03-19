# FeatherPointed


```text
fontawesome-6/Solid/FeatherPointed
```

```text
include('fontawesome-6/Solid/FeatherPointed')
```



| Illustration | FeatherPointed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FeatherPointed.png) | ![illustration for FeatherPointed](../../fontawesome-6/Solid/FeatherPointed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FeatherPointedXs>`
- `<$FeatherPointedSm>`
- `<$FeatherPointedMd>`
- `<$FeatherPointedLg>`





## FeatherPointed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FeatherPointed
include('fontawesome-6/Solid/FeatherPointed')

' renders the element
FeatherPointed('FeatherPointed', 'Feather Pointed', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FeatherPointed
include('fontawesome-6/Solid/FeatherPointed')

' renders the element
FeatherPointed('FeatherPointed', 'Feather Pointed', 'an optional tech label', 'an optional description')
@enduml
```

