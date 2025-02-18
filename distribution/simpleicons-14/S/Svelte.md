# Svelte


```text
simpleicons-14/S/Svelte
```

```text
include('simpleicons-14/S/Svelte')
```



| Illustration | Svelte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Svelte.png) | ![illustration for Svelte](../../simpleicons-14/S/Svelte.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Svelte
include('simpleicons-14/S/Svelte')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Svelte
include('simpleicons-14/S/Svelte')

' renders the element
Svelte('Svelte', 'Svelte', 'an optional tech label', 'an optional description')
@enduml
```

