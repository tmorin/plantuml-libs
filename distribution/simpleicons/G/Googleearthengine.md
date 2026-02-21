# Googleearthengine


```text
simpleicons/G/Googleearthengine
```

```text
include('simpleicons/G/Googleearthengine')
```



| Illustration | Googleearthengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googleearthengine.png) | ![illustration for Googleearthengine](../../simpleicons/G/Googleearthengine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleearthengineXs>`
- `<$GoogleearthengineSm>`
- `<$GoogleearthengineMd>`
- `<$GoogleearthengineLg>`





## Googleearthengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googleearthengine
include('simpleicons/G/Googleearthengine')

' renders the element
Googleearthengine('Googleearthengine', 'Googleearthengine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleearthengine
include('simpleicons/G/Googleearthengine')

' renders the element
Googleearthengine('Googleearthengine', 'Googleearthengine', 'an optional tech label', 'an optional description')
@enduml
```

