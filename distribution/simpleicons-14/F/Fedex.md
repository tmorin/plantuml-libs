# Fedex


```text
simpleicons-14/F/Fedex
```

```text
include('simpleicons-14/F/Fedex')
```



| Illustration | Fedex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fedex.png) | ![illustration for Fedex](../../simpleicons-14/F/Fedex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FedexXs>`
- `<$FedexSm>`
- `<$FedexMd>`
- `<$FedexLg>`





## Fedex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fedex
include('simpleicons-14/F/Fedex')

' renders the element
Fedex('Fedex', 'Fedex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fedex
include('simpleicons-14/F/Fedex')

' renders the element
Fedex('Fedex', 'Fedex', 'an optional tech label', 'an optional description')
@enduml
```

