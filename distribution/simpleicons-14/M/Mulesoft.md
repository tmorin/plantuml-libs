# Mulesoft


```text
simpleicons-14/M/Mulesoft
```

```text
include('simpleicons-14/M/Mulesoft')
```



| Illustration | Mulesoft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mulesoft.png) | ![illustration for Mulesoft](../../simpleicons-14/M/Mulesoft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MulesoftXs>`
- `<$MulesoftSm>`
- `<$MulesoftMd>`
- `<$MulesoftLg>`





## Mulesoft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mulesoft
include('simpleicons-14/M/Mulesoft')

' renders the element
Mulesoft('Mulesoft', 'Mulesoft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mulesoft
include('simpleicons-14/M/Mulesoft')

' renders the element
Mulesoft('Mulesoft', 'Mulesoft', 'an optional tech label', 'an optional description')
@enduml
```

