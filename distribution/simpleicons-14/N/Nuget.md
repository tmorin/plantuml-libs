# Nuget


```text
simpleicons-14/N/Nuget
```

```text
include('simpleicons-14/N/Nuget')
```



| Illustration | Nuget |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nuget.png) | ![illustration for Nuget](../../simpleicons-14/N/Nuget.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NugetXs>`
- `<$NugetSm>`
- `<$NugetMd>`
- `<$NugetLg>`





## Nuget

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nuget
include('simpleicons-14/N/Nuget')

' renders the element
Nuget('Nuget', 'Nuget', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nuget
include('simpleicons-14/N/Nuget')

' renders the element
Nuget('Nuget', 'Nuget', 'an optional tech label', 'an optional description')
@enduml
```

