# Svelte


```text
simpleicons/S/Svelte
```

```text
include('simpleicons/S/Svelte')
```



| Illustration | Svelte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Svelte.png) | ![illustration for Svelte](../../simpleicons/S/Svelte.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SvelteXs>`
- `<$SvelteSm>`
- `<$SvelteMd>`
- `<$SvelteLg>`





## Svelte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Svelte
include('simpleicons/S/Svelte')

' renders the element
Svelte('Svelte', 'Svelte', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Svelte
include('simpleicons/S/Svelte')

' renders the element
Svelte('Svelte', 'Svelte', 'an optional tech label', 'an optional description')
@enduml
```

