# Webflow


```text
fontawesome/Brands/Webflow
```

```text
include('fontawesome/Brands/Webflow')
```



| Illustration | Webflow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Webflow.png) | ![illustration for Webflow](../../fontawesome/Brands/Webflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebflowXs>`
- `<$WebflowSm>`
- `<$WebflowMd>`
- `<$WebflowLg>`





## Webflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Webflow
include('fontawesome/Brands/Webflow')

' renders the element
Webflow('Webflow', 'Webflow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webflow
include('fontawesome/Brands/Webflow')

' renders the element
Webflow('Webflow', 'Webflow', 'an optional tech label', 'an optional description')
@enduml
```

