# Livewire


```text
simpleicons-14/L/Livewire
```

```text
include('simpleicons-14/L/Livewire')
```



| Illustration | Livewire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Livewire.png) | ![illustration for Livewire](../../simpleicons-14/L/Livewire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LivewireXs>`
- `<$LivewireSm>`
- `<$LivewireMd>`
- `<$LivewireLg>`





## Livewire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Livewire
include('simpleicons-14/L/Livewire')

' renders the element
Livewire('Livewire', 'Livewire', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Livewire
include('simpleicons-14/L/Livewire')

' renders the element
Livewire('Livewire', 'Livewire', 'an optional tech label', 'an optional description')
@enduml
```

