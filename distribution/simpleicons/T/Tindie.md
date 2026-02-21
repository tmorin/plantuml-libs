# Tindie


```text
simpleicons/T/Tindie
```

```text
include('simpleicons/T/Tindie')
```



| Illustration | Tindie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tindie.png) | ![illustration for Tindie](../../simpleicons/T/Tindie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TindieXs>`
- `<$TindieSm>`
- `<$TindieMd>`
- `<$TindieLg>`





## Tindie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tindie
include('simpleicons/T/Tindie')

' renders the element
Tindie('Tindie', 'Tindie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tindie
include('simpleicons/T/Tindie')

' renders the element
Tindie('Tindie', 'Tindie', 'an optional tech label', 'an optional description')
@enduml
```

