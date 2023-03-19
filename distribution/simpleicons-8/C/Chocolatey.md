# Chocolatey


```text
simpleicons-8/C/Chocolatey
```

```text
include('simpleicons-8/C/Chocolatey')
```



| Illustration | Chocolatey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Chocolatey.png) | ![illustration for Chocolatey](../../simpleicons-8/C/Chocolatey.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Chocolatey
include('simpleicons-8/C/Chocolatey')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Chocolatey
include('simpleicons-8/C/Chocolatey')

' renders the element
Chocolatey('Chocolatey', 'Chocolatey', 'an optional tech label', 'an optional description')
@enduml
```

