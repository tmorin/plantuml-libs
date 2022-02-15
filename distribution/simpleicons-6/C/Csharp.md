# Csharp


```text
simpleicons-6/C/Csharp
```

```text
include('simpleicons-6/C/Csharp')
```



| Illustration | Csharp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Csharp.png) | ![illustration for Csharp](../../simpleicons-6/C/Csharp.Local.png) |




## Csharp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Csharp
include('simpleicons-6/C/Csharp')

' renders the element
Csharp('Csharp', 'Csharp', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Csharp
include('simpleicons-6/C/Csharp')

' renders the element
Csharp('Csharp', 'Csharp', 'an optional tech label')
@enduml
```

