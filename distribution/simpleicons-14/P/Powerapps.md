# Powerapps


```text
simpleicons-14/P/Powerapps
```

```text
include('simpleicons-14/P/Powerapps')
```



| Illustration | Powerapps |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Powerapps.png) | ![illustration for Powerapps](../../simpleicons-14/P/Powerapps.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PowerappsXs>`
- `<$PowerappsSm>`
- `<$PowerappsMd>`
- `<$PowerappsLg>`





## Powerapps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Powerapps
include('simpleicons-14/P/Powerapps')

' renders the element
Powerapps('Powerapps', 'Powerapps', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Powerapps
include('simpleicons-14/P/Powerapps')

' renders the element
Powerapps('Powerapps', 'Powerapps', 'an optional tech label', 'an optional description')
@enduml
```

