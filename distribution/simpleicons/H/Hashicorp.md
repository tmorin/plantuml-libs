# Hashicorp


```text
simpleicons/H/Hashicorp
```

```text
include('simpleicons/H/Hashicorp')
```



| Illustration | Hashicorp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hashicorp.png) | ![illustration for Hashicorp](../../simpleicons/H/Hashicorp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HashicorpXs>`
- `<$HashicorpSm>`
- `<$HashicorpMd>`
- `<$HashicorpLg>`





## Hashicorp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hashicorp
include('simpleicons/H/Hashicorp')

' renders the element
Hashicorp('Hashicorp', 'Hashicorp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hashicorp
include('simpleicons/H/Hashicorp')

' renders the element
Hashicorp('Hashicorp', 'Hashicorp', 'an optional tech label', 'an optional description')
@enduml
```

