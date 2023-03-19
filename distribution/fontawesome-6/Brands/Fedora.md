# Fedora


```text
fontawesome-6/Brands/Fedora
```

```text
include('fontawesome-6/Brands/Fedora')
```



| Illustration | Fedora |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Fedora.png) | ![illustration for Fedora](../../fontawesome-6/Brands/Fedora.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FedoraXs>`
- `<$FedoraSm>`
- `<$FedoraMd>`
- `<$FedoraLg>`





## Fedora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fedora
include('fontawesome-6/Brands/Fedora')

' renders the element
Fedora('Fedora', 'Fedora', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fedora
include('fontawesome-6/Brands/Fedora')

' renders the element
Fedora('Fedora', 'Fedora', 'an optional tech label', 'an optional description')
@enduml
```

