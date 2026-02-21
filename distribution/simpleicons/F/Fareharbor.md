# Fareharbor


```text
simpleicons/F/Fareharbor
```

```text
include('simpleicons/F/Fareharbor')
```



| Illustration | Fareharbor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fareharbor.png) | ![illustration for Fareharbor](../../simpleicons/F/Fareharbor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FareharborXs>`
- `<$FareharborSm>`
- `<$FareharborMd>`
- `<$FareharborLg>`





## Fareharbor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fareharbor
include('simpleicons/F/Fareharbor')

' renders the element
Fareharbor('Fareharbor', 'Fareharbor', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fareharbor
include('simpleicons/F/Fareharbor')

' renders the element
Fareharbor('Fareharbor', 'Fareharbor', 'an optional tech label', 'an optional description')
@enduml
```

