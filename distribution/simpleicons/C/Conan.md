# Conan


```text
simpleicons/C/Conan
```

```text
include('simpleicons/C/Conan')
```



| Illustration | Conan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Conan.png) | ![illustration for Conan](../../simpleicons/C/Conan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConanXs>`
- `<$ConanSm>`
- `<$ConanMd>`
- `<$ConanLg>`





## Conan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Conan
include('simpleicons/C/Conan')

' renders the element
Conan('Conan', 'Conan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Conan
include('simpleicons/C/Conan')

' renders the element
Conan('Conan', 'Conan', 'an optional tech label', 'an optional description')
@enduml
```

