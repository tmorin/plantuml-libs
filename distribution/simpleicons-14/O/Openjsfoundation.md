# Openjsfoundation


```text
simpleicons-14/O/Openjsfoundation
```

```text
include('simpleicons-14/O/Openjsfoundation')
```



| Illustration | Openjsfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Openjsfoundation.png) | ![illustration for Openjsfoundation](../../simpleicons-14/O/Openjsfoundation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenjsfoundationXs>`
- `<$OpenjsfoundationSm>`
- `<$OpenjsfoundationMd>`
- `<$OpenjsfoundationLg>`





## Openjsfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Openjsfoundation
include('simpleicons-14/O/Openjsfoundation')

' renders the element
Openjsfoundation('Openjsfoundation', 'Openjsfoundation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openjsfoundation
include('simpleicons-14/O/Openjsfoundation')

' renders the element
Openjsfoundation('Openjsfoundation', 'Openjsfoundation', 'an optional tech label', 'an optional description')
@enduml
```

