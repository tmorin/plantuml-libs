# Customink


```text
simpleicons-14/C/Customink
```

```text
include('simpleicons-14/C/Customink')
```



| Illustration | Customink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Customink.png) | ![illustration for Customink](../../simpleicons-14/C/Customink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CustominkXs>`
- `<$CustominkSm>`
- `<$CustominkMd>`
- `<$CustominkLg>`





## Customink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Customink
include('simpleicons-14/C/Customink')

' renders the element
Customink('Customink', 'Customink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Customink
include('simpleicons-14/C/Customink')

' renders the element
Customink('Customink', 'Customink', 'an optional tech label', 'an optional description')
@enduml
```

