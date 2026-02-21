# Openjdk


```text
simpleicons/O/Openjdk
```

```text
include('simpleicons/O/Openjdk')
```



| Illustration | Openjdk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openjdk.png) | ![illustration for Openjdk](../../simpleicons/O/Openjdk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenjdkXs>`
- `<$OpenjdkSm>`
- `<$OpenjdkMd>`
- `<$OpenjdkLg>`





## Openjdk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openjdk
include('simpleicons/O/Openjdk')

' renders the element
Openjdk('Openjdk', 'Openjdk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openjdk
include('simpleicons/O/Openjdk')

' renders the element
Openjdk('Openjdk', 'Openjdk', 'an optional tech label', 'an optional description')
@enduml
```

