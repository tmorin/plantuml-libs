# Transportforireland


```text
simpleicons-14/T/Transportforireland
```

```text
include('simpleicons-14/T/Transportforireland')
```



| Illustration | Transportforireland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Transportforireland.png) | ![illustration for Transportforireland](../../simpleicons-14/T/Transportforireland.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransportforirelandXs>`
- `<$TransportforirelandSm>`
- `<$TransportforirelandMd>`
- `<$TransportforirelandLg>`





## Transportforireland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Transportforireland
include('simpleicons-14/T/Transportforireland')

' renders the element
Transportforireland('Transportforireland', 'Transportforireland', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Transportforireland
include('simpleicons-14/T/Transportforireland')

' renders the element
Transportforireland('Transportforireland', 'Transportforireland', 'an optional tech label', 'an optional description')
@enduml
```

