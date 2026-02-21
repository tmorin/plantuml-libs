# Chocolatey


```text
simpleicons/C/Chocolatey
```

```text
include('simpleicons/C/Chocolatey')
```



| Illustration | Chocolatey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chocolatey.png) | ![illustration for Chocolatey](../../simpleicons/C/Chocolatey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChocolateyXs>`
- `<$ChocolateySm>`
- `<$ChocolateyMd>`
- `<$ChocolateyLg>`





## Chocolatey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chocolatey
include('simpleicons/C/Chocolatey')

' renders the element
Chocolatey('Chocolatey', 'Chocolatey', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chocolatey
include('simpleicons/C/Chocolatey')

' renders the element
Chocolatey('Chocolatey', 'Chocolatey', 'an optional tech label', 'an optional description')
@enduml
```

