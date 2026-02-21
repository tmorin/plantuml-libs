# Expertsexchange


```text
simpleicons/E/Expertsexchange
```

```text
include('simpleicons/E/Expertsexchange')
```



| Illustration | Expertsexchange |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Expertsexchange.png) | ![illustration for Expertsexchange](../../simpleicons/E/Expertsexchange.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExpertsexchangeXs>`
- `<$ExpertsexchangeSm>`
- `<$ExpertsexchangeMd>`
- `<$ExpertsexchangeLg>`





## Expertsexchange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Expertsexchange
include('simpleicons/E/Expertsexchange')

' renders the element
Expertsexchange('Expertsexchange', 'Expertsexchange', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Expertsexchange
include('simpleicons/E/Expertsexchange')

' renders the element
Expertsexchange('Expertsexchange', 'Expertsexchange', 'an optional tech label', 'an optional description')
@enduml
```

