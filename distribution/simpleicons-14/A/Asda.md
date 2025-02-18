# Asda


```text
simpleicons-14/A/Asda
```

```text
include('simpleicons-14/A/Asda')
```



| Illustration | Asda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Asda.png) | ![illustration for Asda](../../simpleicons-14/A/Asda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsdaXs>`
- `<$AsdaSm>`
- `<$AsdaMd>`
- `<$AsdaLg>`





## Asda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Asda
include('simpleicons-14/A/Asda')

' renders the element
Asda('Asda', 'Asda', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Asda
include('simpleicons-14/A/Asda')

' renders the element
Asda('Asda', 'Asda', 'an optional tech label', 'an optional description')
@enduml
```

