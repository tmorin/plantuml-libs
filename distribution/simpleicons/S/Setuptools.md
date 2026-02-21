# Setuptools


```text
simpleicons/S/Setuptools
```

```text
include('simpleicons/S/Setuptools')
```



| Illustration | Setuptools |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Setuptools.png) | ![illustration for Setuptools](../../simpleicons/S/Setuptools.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SetuptoolsXs>`
- `<$SetuptoolsSm>`
- `<$SetuptoolsMd>`
- `<$SetuptoolsLg>`





## Setuptools

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Setuptools
include('simpleicons/S/Setuptools')

' renders the element
Setuptools('Setuptools', 'Setuptools', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Setuptools
include('simpleicons/S/Setuptools')

' renders the element
Setuptools('Setuptools', 'Setuptools', 'an optional tech label', 'an optional description')
@enduml
```

