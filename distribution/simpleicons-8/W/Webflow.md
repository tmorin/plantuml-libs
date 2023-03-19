# Webflow


```text
simpleicons-8/W/Webflow
```

```text
include('simpleicons-8/W/Webflow')
```



| Illustration | Webflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Webflow.png) | ![illustration for Webflow](../../simpleicons-8/W/Webflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebflowXs>`
- `<$WebflowSm>`
- `<$WebflowMd>`
- `<$WebflowLg>`





## Webflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Webflow
include('simpleicons-8/W/Webflow')

' renders the element
Webflow('Webflow', 'Webflow', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Webflow
include('simpleicons-8/W/Webflow')

' renders the element
Webflow('Webflow', 'Webflow', 'an optional tech label', 'an optional description')
@enduml
```

