# Fsharp


```text
simpleicons/F/Fsharp
```

```text
include('simpleicons/F/Fsharp')
```



| Illustration | Fsharp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fsharp.png) | ![illustration for Fsharp](../../simpleicons/F/Fsharp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FsharpXs>`
- `<$FsharpSm>`
- `<$FsharpMd>`
- `<$FsharpLg>`





## Fsharp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fsharp
include('simpleicons/F/Fsharp')

' renders the element
Fsharp('Fsharp', 'Fsharp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fsharp
include('simpleicons/F/Fsharp')

' renders the element
Fsharp('Fsharp', 'Fsharp', 'an optional tech label', 'an optional description')
@enduml
```

