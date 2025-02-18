# Deliveroo


```text
simpleicons-14/D/Deliveroo
```

```text
include('simpleicons-14/D/Deliveroo')
```



| Illustration | Deliveroo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Deliveroo.png) | ![illustration for Deliveroo](../../simpleicons-14/D/Deliveroo.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Deliveroo
include('simpleicons-14/D/Deliveroo')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Deliveroo
include('simpleicons-14/D/Deliveroo')

' renders the element
Deliveroo('Deliveroo', 'Deliveroo', 'an optional tech label', 'an optional description')
@enduml
```

