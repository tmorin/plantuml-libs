# Hamsa


```text
fontawesome-6/Solid/Hamsa
```

```text
include('fontawesome-6/Solid/Hamsa')
```



| Illustration | Hamsa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Hamsa.png) | ![illustration for Hamsa](../../fontawesome-6/Solid/Hamsa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HamsaXs>`
- `<$HamsaSm>`
- `<$HamsaMd>`
- `<$HamsaLg>`





## Hamsa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hamsa
include('fontawesome-6/Solid/Hamsa')

' renders the element
Hamsa('Hamsa', 'Hamsa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hamsa
include('fontawesome-6/Solid/Hamsa')

' renders the element
Hamsa('Hamsa', 'Hamsa', 'an optional tech label', 'an optional description')
@enduml
```

