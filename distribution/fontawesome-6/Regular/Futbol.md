# Futbol


```text
fontawesome-6/Regular/Futbol
```

```text
include('fontawesome-6/Regular/Futbol')
```



| Illustration | Futbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Futbol.png) | ![illustration for Futbol](../../fontawesome-6/Regular/Futbol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FutbolXs>`
- `<$FutbolSm>`
- `<$FutbolMd>`
- `<$FutbolLg>`





## Futbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Futbol
include('fontawesome-6/Regular/Futbol')

' renders the element
Futbol('Futbol', 'Futbol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Futbol
include('fontawesome-6/Regular/Futbol')

' renders the element
Futbol('Futbol', 'Futbol', 'an optional tech label', 'an optional description')
@enduml
```

