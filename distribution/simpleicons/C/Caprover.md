# Caprover


```text
simpleicons/C/Caprover
```

```text
include('simpleicons/C/Caprover')
```



| Illustration | Caprover |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Caprover.png) | ![illustration for Caprover](../../simpleicons/C/Caprover.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaproverXs>`
- `<$CaproverSm>`
- `<$CaproverMd>`
- `<$CaproverLg>`





## Caprover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Caprover
include('simpleicons/C/Caprover')

' renders the element
Caprover('Caprover', 'Caprover', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Caprover
include('simpleicons/C/Caprover')

' renders the element
Caprover('Caprover', 'Caprover', 'an optional tech label', 'an optional description')
@enduml
```

