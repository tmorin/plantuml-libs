# Deliveroo


```text
simpleicons/D/Deliveroo
```

```text
include('simpleicons/D/Deliveroo')
```



| Illustration | Deliveroo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Deliveroo.png) | ![illustration for Deliveroo](../../simpleicons/D/Deliveroo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeliverooXs>`
- `<$DeliverooSm>`
- `<$DeliverooMd>`
- `<$DeliverooLg>`





## Deliveroo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Deliveroo
include('simpleicons/D/Deliveroo')

' renders the element
Deliveroo('Deliveroo', 'Deliveroo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deliveroo
include('simpleicons/D/Deliveroo')

' renders the element
Deliveroo('Deliveroo', 'Deliveroo', 'an optional tech label', 'an optional description')
@enduml
```

