# Xaml


```text
simpleicons-5/X/Xaml
```

```text
include('simpleicons-5/X/Xaml')
```



| Illustration | Xaml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xaml.png) | ![illustration for Xaml](../../simpleicons-5/X/Xaml.Local.png) |




## Xaml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xaml
include('simpleicons-5/X/Xaml')

' renders the element
Xaml('Xaml', 'Xaml', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xaml
include('simpleicons-5/X/Xaml')

' renders the element
Xaml('Xaml', 'Xaml', 'an optional tech label')
@enduml
```

