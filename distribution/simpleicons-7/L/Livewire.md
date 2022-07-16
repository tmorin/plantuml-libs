# Livewire


```text
simpleicons-7/L/Livewire
```

```text
include('simpleicons-7/L/Livewire')
```



| Illustration | Livewire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Livewire.png) | ![illustration for Livewire](../../simpleicons-7/L/Livewire.Local.png) |




## Livewire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Livewire
include('simpleicons-7/L/Livewire')

' renders the element
Livewire('Livewire', 'Livewire', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Livewire
include('simpleicons-7/L/Livewire')

' renders the element
Livewire('Livewire', 'Livewire', 'an optional tech label')
@enduml
```

