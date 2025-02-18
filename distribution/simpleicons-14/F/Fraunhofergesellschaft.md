# Fraunhofergesellschaft


```text
simpleicons-14/F/Fraunhofergesellschaft
```

```text
include('simpleicons-14/F/Fraunhofergesellschaft')
```



| Illustration | Fraunhofergesellschaft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fraunhofergesellschaft.png) | ![illustration for Fraunhofergesellschaft](../../simpleicons-14/F/Fraunhofergesellschaft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FraunhofergesellschaftXs>`
- `<$FraunhofergesellschaftSm>`
- `<$FraunhofergesellschaftMd>`
- `<$FraunhofergesellschaftLg>`





## Fraunhofergesellschaft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fraunhofergesellschaft
include('simpleicons-14/F/Fraunhofergesellschaft')

' renders the element
Fraunhofergesellschaft('Fraunhofergesellschaft', 'Fraunhofergesellschaft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fraunhofergesellschaft
include('simpleicons-14/F/Fraunhofergesellschaft')

' renders the element
Fraunhofergesellschaft('Fraunhofergesellschaft', 'Fraunhofergesellschaft', 'an optional tech label', 'an optional description')
@enduml
```

