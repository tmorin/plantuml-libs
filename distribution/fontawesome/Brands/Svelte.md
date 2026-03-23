# Svelte


```text
fontawesome/Brands/Svelte
```

```text
include('fontawesome/Brands/Svelte')
```



| Illustration | Svelte |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Svelte.png) | ![illustration for Svelte](../../fontawesome/Brands/Svelte.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Svelte
include('fontawesome/Brands/Svelte')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Svelte
include('fontawesome/Brands/Svelte')

' renders the element
Svelte('Svelte', 'Svelte', 'an optional tech label', 'an optional description')
@enduml
```

