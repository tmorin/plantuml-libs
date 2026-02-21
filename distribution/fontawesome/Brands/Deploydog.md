# Deploydog


```text
fontawesome/Brands/Deploydog
```

```text
include('fontawesome/Brands/Deploydog')
```



| Illustration | Deploydog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Deploydog.png) | ![illustration for Deploydog](../../fontawesome/Brands/Deploydog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeploydogXs>`
- `<$DeploydogSm>`
- `<$DeploydogMd>`
- `<$DeploydogLg>`





## Deploydog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Deploydog
include('fontawesome/Brands/Deploydog')

' renders the element
Deploydog('Deploydog', 'Deploydog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deploydog
include('fontawesome/Brands/Deploydog')

' renders the element
Deploydog('Deploydog', 'Deploydog', 'an optional tech label', 'an optional description')
@enduml
```

